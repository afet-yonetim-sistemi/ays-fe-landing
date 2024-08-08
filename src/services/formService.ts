import type { FormSchema } from '@/components/EmergencyForm/schema/formSchema'
import { http } from '@/configs/axiosConfig'
import { toast } from '@/components/ui/toast/use-toast'
import { handleFormErrors } from '@/utils/errorHandler'

const onSubmitForm = async (values: FormSchema, cb: () => void): Promise<void> => {
  try {
    const { data } = await http.post('emergency-evacuation-application', values)
    if (data.isSuccess) {
      toast({
        variant: 'success',
        title: 'İşlem Başarılı',
        description: 'Başvurunuz kontrol edilmek üzere başarıyla alınmıştır'
      })
      cb()
    } else {
      toast({
        variant: 'destructive',
        title: 'İşlem Başarısız',
        description: 'İşlem sırasında bir hata meydana geldi'
      })
    }
  } catch (err) {
    handleFormErrors(err)
  }
}

export default onSubmitForm