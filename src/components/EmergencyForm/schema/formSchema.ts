import { z } from 'zod'
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance()

const phoneNumberSchema = z
  .object({
    countryCode: z
      .string()
      .min(1, { message: 'Bir ülke kodu seçilmeli' })
      .regex(/^\d+$/, { message: 'Ülke kodu sadece rakamlardan oluşmalıdır' }),
    lineNumber: z
      .string()
      .min(1, { message: 'Lütfen geçerli bir telefon numarası girin' })
      .regex(/^\d+$/, {
        message: 'Telefon numarası sadece rakamlardan oluşmalıdır',
      }),
  })
  .superRefine(({ countryCode, lineNumber }, ctx) => {
    const fullNumber = `+${countryCode}${lineNumber}`

    try {
      const parsed = phoneUtil.parse(fullNumber, 'TR')

      if (!phoneUtil.isValidNumber(parsed)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Lütfen geçerli bir telefon numarası girin',
        })
      }

      const digitsOnly = phoneUtil
        .format(parsed, PhoneNumberFormat.E164)
        .replace(/\D/g, '')

      if (digitsOnly.length !== 12) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Telefon numarası 12 haneli olmalıdır',
        })
      }
    } catch (err) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Lütfen geçerli bir telefon numarası girin',
      })
    }
  })

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
    .regex(/^(?![^a-zA-ZÇçĞğİıÖöŞşÜü])[a-zA-ZÇçĞğİıÖöŞşÜü ,.'-]*$/, {
      message: 'Özel karakter veya sayı içeremez',
    })

const requiredFieldValidation = (): z.ZodString =>
  z.string().min(1, { message: `Bu alan zorunludur` })

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
    .positive({ message: 'Koltuk sayısı belirtmelisin' })
    .max(999, { message: 'Maksimum 3 haneli bir sayı olmalıdır' }),
  targetCity: requiredFieldValidation(),
  targetDistrict: requiredFieldValidation(),
})

export { formSchema }
export type FormSchema = z.infer<typeof formSchema>
