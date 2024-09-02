import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2'

export default function PhoneInput(props: PhoneInputProps) {
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
