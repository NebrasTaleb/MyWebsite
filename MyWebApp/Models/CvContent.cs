using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Models
{
	public class CvContent
	{

		public string FullName { get; set; }

		public string ImagePath { get; set; }

		public string Email { get; set; }

		public string Education { get; set; }

		public string Address { get; set; }

		public string DateOfBirth { get; set; }

		public string PhoneNumber { get; set; }

		public List<string> Skills { get; set; }
	}
}
