using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using practice.Models;

namespace practice.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            //var login = new Login();

            return View();
        }
    }
}