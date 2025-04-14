import { toast } from '@/components/ui/toast/use-toast'
import { handleApiError } from '@/lib/handleApiError'
import { AxiosError } from 'axios'

interface SubError {
  field: string
  message?: string
}

interface ErrorResponse {
  subErrors: SubError[]
}

const handleFormErrors = (err: AxiosError<ErrorResponse>): void => {
  const errData = err?.response?.data

  if (errData && errData.subErrors && errData.subErrors.length > 0) {
    const phoneError = errData.subErrors.find((subError) =>
      ['phoneNumber', 'applicantPhoneNumber'].includes(subError.field)
    )
    const duplicatePhoneError = errData.subErrors.find(
      (subError) => subError.field === 'phoneNumberMustNotBeSameOne'
    )

    if (phoneError) {
      toast({
        variant: 'destructive',
        title: 'İşlem Başarısız',
        description: 'Geçerli bir telefon numarası giriniz',
      })
      return
    } else if (duplicatePhoneError) {
      toast({
        variant: 'destructive',
        title: 'İşlem Başarısız',
        description:
          'Başkası adına yapılan başvurular için girilen telefon numaraları aynı olamaz',
      })
      return
    }
  }
  handleApiError(err)
}

export { handleFormErrors }
