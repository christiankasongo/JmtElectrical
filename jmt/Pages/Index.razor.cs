using jmt.Data;
using Microsoft.AspNetCore.Components;
using System.Net;
using System.Net.Mail;

namespace jmt.Pages
{
    public partial class Index : ComponentBase
    {
        public List<string> ServiceLstOne = new();
        public List<string> ServiceLstTwo = new();
        private string? _aboutUs;
        public Dictionary<string, string> Testimonials = new();
        private string? _emailAddress;
        private int _mobileNumber;

        public string? EmailSentMessage;

        private MessageCreditials _messageCreditials = new();

        protected override void OnInitialized()
        {
            PopulateInformation();
            StateHasChanged();
        }


        public void PopulateInformation()
        {
            _aboutUs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
            _emailAddress = "jmtelectrical@hotmail.com";
            _mobileNumber = 0701234567;

            GetServices();
        }

        public void GetServices() {

            ServiceLstOne.Add("A simple default list group item");
            ServiceLstOne.Add("A simple default list group item");
            ServiceLstOne.Add("A simple default list group item");

            ServiceLstTwo.Add("A simple default list group item");
            ServiceLstTwo.Add("A simple default list group item");
            ServiceLstTwo.Add("A simple default list group item");
        }

        public async Task Submit()
        {
            try
            {
                var newMail = new MailMessage();
                var client = new SmtpClient("smtp.gmail.com");


                newMail.From = new MailAddress(_messageCreditials.Email, _messageCreditials.Name);
                newMail.To.Add("chriscreepa10@gmail.com");

                newMail.Subject = $"Email from {_messageCreditials.Name}";

                newMail.IsBodyHtml = true;
                newMail.Body = _messageCreditials.Message;

                client.EnableSsl = true;
                client.Port = 465;
                client.UseDefaultCredentials= true;

                client.Send(newMail);




                EmailSentMessage = "Sent";
                StateHasChanged();
            }
            catch (Exception ex)
            {
                EmailSentMessage = "Error occurred please try again";
                StateHasChanged();
            }

        }
    }
}
