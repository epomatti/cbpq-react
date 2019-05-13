function LicenseView() {
  const { license } = this.props
  return JSON.stringify(license)
}

export default LicenseView