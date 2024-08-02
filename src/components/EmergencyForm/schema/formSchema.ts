import { z } from 'zod'

const phoneNumberSchema = z.object({
  countryCode: z.string().min(1, { message: 'Bir ülke kodu seçilmeli' }).regex(/^\d+$/, { message: 'Ülke kodu sadece rakamlardan oluşmalıdır' }),
  lineNumber: z.string().min(1, { message: 'Bir numara girmelisin' }).regex(/^\d+$/, { message: 'Telefon numarası sadece rakamlardan oluşmalıdır' })
})

const formSchema = z.object({
  applicantFirstName: z.string()
    .min(2, { message: 'Minimum 2 karakter uzunluğunda olmalıdır' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Özel karakter içeremez' })
    .optional(),
  applicantLastName: z.string()
    .min(2, { message: 'Minimum 2 karakter uzunluğunda olmalıdır' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Özel karakter içeremez' })
    .optional(),
  applicantPhoneNumber: phoneNumberSchema.optional(),
  firstName: z.string()
    .min(2, { message: 'Minimum 2 karakter uzunluğunda olmalıdır' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Özel karakter içeremez' }),
  lastName: z.string()
    .min(2, { message: 'Minimum 2 karakter uzunluğunda olmalıdır' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Özel karakter içeremez' }),
  phoneNumber: phoneNumberSchema,
  sourceCity: z.string()
    .min(1, { message: 'Bir şehir seçmelisin' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' }),
  sourceDistrict: z.string()
    .min(1, { message: 'Bir ilçe seçmelisin' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' }),
  address: z.string()
    .min(20, { message: 'Minimum 20 karakter uzunluğunda olmalıdır' })
    .max(250, { message: 'Maksimum 250 karakter uzunluğunda olabilir' }),
  seatingCount: z.number()
    .positive({ message: 'Pozitif bir sayı olmalıdır' })
    .max(999, { message: 'Maksimum 3 haneli bir sayı olmalıdır' }),
  targetCity: z.string()
    .min(1, { message: 'Bir şehir seçmelisin' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' }),
  targetDistrict: z.string()
    .min(1, { message: 'Bir ilçe seçmelisin' })
    .max(100, { message: 'Maksimum 100 karakter uzunluğunda olabilir' })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' })
})

export { formSchema }
export type FormSchema = z.infer<typeof formSchema>;
