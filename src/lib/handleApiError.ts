import { toast } from '@/components/ui/toast/use-toast'
import { AxiosError } from 'axios'

export const handleApiError = (
  error: AxiosError,
  customMessage?: { title?: string; description?: string }
): void => {
  let title = customMessage?.title ?? 'İşlem Başarısız'
  let description =
    customMessage?.description ?? 'İşlem sırasında bir hata meydana geldi'

  if (error?.response?.status === 429) {
    title = 'İşlem Başarısız'
    description =
      'İstek limitini aştınız. Lütfen bir süre bekledikten sonra tekrar deneyiniz'
  }

  toast({
    title,
    description,
    variant: 'destructive',
  })
}
