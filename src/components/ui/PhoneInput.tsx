import { cn } from '@/lib/utils'
import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2'

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  return (
    <ReactPhoneInput
      {...props}
      country="tr"
      placeholder="Telefon Numarası"
      enableSearch={true}
      searchPlaceholder="Ara..."
      searchNotFound="Bulunamadı"
      countryCodeEditable={false}
      onlyCountries={['tr']}
      disableDropdown
      containerClass={cn('!w-full')}
      inputClass={cn('!w-full')}
      buttonClass={cn('!pointer-events-none hover:!cursor-not-allowed')}
      inputProps={{ name: 'phone' }}
    />
  )
}

export default PhoneInput
