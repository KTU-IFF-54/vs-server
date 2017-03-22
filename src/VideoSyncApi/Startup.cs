using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Rewrite;
using static VideoSyncApi.Middleware.Extensions;
using VideoSyncApi.Infrastructure.WebSocketServer;

namespace VideoSyncApi {
    public class Startup {
        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddSingleton<WebSocketServerManager>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder builder, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            if (env.IsDevelopment())
                builder.UseDeveloperExceptionPage();

            builder
                .Map("/connection", connection =>
                    connection.UseWebSocketServer()
                ).Map("/api/v1.0", api => 
                    api.UseMvc(routes => 
                        routes.MapRoute(
                            name: "default",
                            template: "{controller=Home}/{action=Index}/{id?}"
                        )
                    )
                ).Map("/app", app => {
                    //app.UseStaticFiles(;
                    app.UseDefaultFiles();
                    app.UseStaticFiles();
                }
                ).UseRewriter(
                    new RewriteOptions().AddRedirect(@".*", "app/")
                ).Use(async (a, b) => await b());
        }
    }
}
