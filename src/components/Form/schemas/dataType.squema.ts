import { z } from "zod";

const usernameMinLength = 5
const usernameMessage = `Username must be at least ${usernameMinLength} characters long.`
export const usernameSchema = z.string().min(usernameMinLength, { message: usernameMessage })

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailMessage = 'Invalid email format.'
export const emailSchema = z.string().regex(emailRegex, { message: emailMessage })

const passwordMinLength = 8
const passwordLowerCaseRegex = /[a-z]/
const passwordUpperCaseRegex = /[A-Z]/
const passwordNumberRegex = /\d/
const passwordSymbolRegex = /[!@#$%^&*(),.?":{}|<>]/
const lengthMessage = `The password must be at least ${passwordMinLength} characters long.`
const lowercaseMessage = 'The password must contain at least one lowercase letter.'
const uppercaseMessage = 'The password must contain at least one uppercase letter.'
const numberMessage = 'The password must contain at least one number.'
const specialCharMessage = 'The password must contain at least one special character.'
export const passwordSchema = z.string().min(passwordMinLength, { message: lengthMessage })
.refine((val) => passwordLowerCaseRegex.test(val), { message: lowercaseMessage })
.refine((val) => passwordUpperCaseRegex.test(val), { message: uppercaseMessage })
.refine((val) => passwordNumberRegex.test(val), { message: numberMessage })
.refine((val) => passwordSymbolRegex.test(val), { message: specialCharMessage })

export const confirmPasswordSquema = z.string().min(passwordMinLength, { message: lengthMessage })

export const passwordLoginSchema = z.string().min(1, { message: 'Required field' });