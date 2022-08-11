
const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-2 bg-neutral text-base-100 footer-center">
      <div>
        <p>Copyright &copy; {footerYear} Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer