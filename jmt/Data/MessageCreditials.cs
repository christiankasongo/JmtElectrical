using System.ComponentModel.DataAnnotations;

namespace jmt.Data
{
    public class MessageCreditials
    {
        [Required(ErrorMessage = "This field is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public string Email { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public string Message { get; set; }
    }
}
