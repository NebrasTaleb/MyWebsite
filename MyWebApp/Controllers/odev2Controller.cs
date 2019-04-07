using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWebApp.Controllers
{
	[Route("[controller]/[action]")]
	public class odev2Controller : Controller
    {
        public IActionResult index()
        {
            return View();
        }
    }
}