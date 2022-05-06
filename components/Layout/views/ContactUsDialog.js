import ContactUsForm from "../forms/ContactUsForm";
import DialogBase from "../../Elements/DialogBase";

export default function ContactUsDialog({
  openContactForm,
  setOpenContactForm,
}) {
  return (
    <DialogBase
      open={openContactForm}
      setOpen={setOpenContactForm}
      title="Contact-Us"
      contentText="We want to help you! Send us a message and we'll reach out as soon as possible."
      fullWidth
    >
      <ContactUsForm setOpenContactForm={setOpenContactForm} />
    </DialogBase>
  );
}
