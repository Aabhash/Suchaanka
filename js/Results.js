using System;
using System.Web;
using System.Web.UI;

namespace WASP
{
	
	public partial class Default : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			string x = Request.QueryString["score"];
			try
			{
				int m = 0, n = 0;
				if (x.Length == 2)
				{
					m = Int32.Parse(x[0].ToString());
					n = Int32.Parse(x[1].ToString());
				}
				else if (x.Length == 3)
				{
					if (x[0] == '-')
					{
						m = 0 - (Int32.Parse(x[1].ToString()));
						n = Int32.Parse(x[2].ToString());
					}
					else
					{
						m = Int32.Parse(x[0].ToString());
						n = 0 - (Int32.Parse(x[2].ToString()));
					}
				}
				else if (x.Length == 4)
				{
					m = 0 - (Int32.Parse(x[1].ToString()));
					n = 0 - (Int32.Parse(x[3].ToString()));
				}
				//Max value = (1.5 * 6) * 16
				int mi = m * 16;
				int ni = n * 16;

				string ms = mi.ToString();
				string ns = ni.ToString();

				ImageDiv.Style.Add("left ", ms + "px");
				ImageDiv.Style.Add("top", ns + "px");
			}
			catch(Exception ex)
			{

			}
		}
	}
}

