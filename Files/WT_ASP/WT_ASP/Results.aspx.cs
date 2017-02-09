using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WT_ASP
{
    public partial class Results : System.Web.UI.Page
    {
        int[] x = new int[2];
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        public override void ProcessRequest(HttpContext context)
        {
            string jsonString = String.Empty;
            HttpContext.Current.Request.InputStream.Position = 0;

            using (System.IO.StreamReader inputStream = new System.IO.StreamReader(HttpContext.Current.Request.InputStream))
            {
                jsonString = inputStream.ReadToEnd();
                System.Web.Script.Serialization.JavaScriptSerializer jSerealize = new System.Web.Script.Serialization.JavaScriptSerializer();
                var score = jSerealize.Deserialize<int[]>(jsonString);

                x[0] = score[0];
                x[1] = score[1];

                context.Response.Write(jSerealize.Serialize(
                    new
                    {
                        Response = "Message Received"
                    }));

            }
        }
    }
}