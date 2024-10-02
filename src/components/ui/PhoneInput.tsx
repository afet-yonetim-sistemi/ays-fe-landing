import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2'

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  return (
    <ReactPhoneInput
      {...props}
      containerClass="w-full"
      country={'tr'}
      placeholder="Telefon Numarası"
      enableSearch={true}
      searchClass="bg-white "
      searchPlaceholder="Ara..."
      searchNotFound="Bulunamadı"
      inputClass="py-5 !w-full"
      inputProps={{ name: 'phone' }}
      countryCodeEditable={false}
    />
  )
}

export default PhoneInput
