import { z } from 'zod'

const noSpecialCharAndLengthValidaton = (
  minLength: number,
  maxLength: number
): z.ZodString =>
  z
    .string()
    .min(minLength, {
      message: `Minimum ${minLength} karakter uzunluğunda olmalıdır`,
    })
    .max(maxLength, {
      message: `Maksimum ${maxLength} karakter uzunluğunda olabilir`,
    })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' })

const requiredFieldValidation = (): z.ZodString =>
  z.string().min(1, { message: `Bu alan zorunludur` })

const phoneNumberSchema = z.object({
  countryCode: z
    .string()
    .min(1, { message: 'Bir ülke kodu seçilmeli' })
    .regex(/^\d+$/, { message: 'Ülke kodu sadece rakamlardan oluşmalıdır' }),
  lineNumber: z
    .string()
    .min(10, { message: 'Lütfen geçerli bir telefon numarası girin' })
    .max(10, { message: 'Lütfen geçerli bir telefon numarası girin' })
    .regex(/^\d+$/, {
      message: 'Telefon numarası sadece rakamlardan oluşmalıdır',
    }),
})

const formSchema = z.object({
  applicantFirstName: noSpecialCharAndLengthValidaton(2, 100).optional(),
  applicantLastName: noSpecialCharAndLengthValidaton(2, 100).optional(),
  applicantPhoneNumber: phoneNumberSchema.optional(),
  firstName: noSpecialCharAndLengthValidaton(2, 100),
  lastName: noSpecialCharAndLengthValidaton(2, 100),
  phoneNumber: phoneNumberSchema,
  sourceCity: requiredFieldValidation(),
  sourceDistrict: requiredFieldValidation(),
  address: z
    .string()
    .min(20, { message: 'Minimum 20 karakter uzunluğunda olmalıdır' })
    .max(250, { message: 'Maksimum 250 karakter uzunluğunda olabilir' }),
  seatingCount: z
    .number({ message: 'Koltuk sayısı belirtmelisin' })
    .positive({ message: 'Pozitif bir sayı olmalıdır' })
    .max(999, { message: 'Maksimum 3 haneli bir sayı olmalıdır' }),
  targetCity: requiredFieldValidation(),
  targetDistrict: requiredFieldValidation(),
})

export { formSchema }
export type FormSchema = z.infer<typeof formSchema>
