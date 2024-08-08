import { toast } from '@/components/ui/toast/use-toast'

const handleFormErrors = (err: any) => {
  const errData = err?.response?.data

  if (errData && errData.subErrors && errData.subErrors.length > 0) {
    console.log(errData)
    const phoneFields = ['phoneNumber', 'applicantPhoneNumber']
    const phoneError = errData.subErrors.find((subError: any) => phoneFields.includes(subError.field))

    if (phoneError) {
      toast({
        variant: 'destructive',
        title: 'İşlem Başarısız',
        description: 'Geçerli bir telefon numarası giriniz'
      })
      return
    }
  }

  toast({
    variant: 'destructive',
    title: 'İşlem Başarısız',
    description: 'İşlem sırasında bir hata meydana geldi'
  })
}

export { handleFormErrors }
