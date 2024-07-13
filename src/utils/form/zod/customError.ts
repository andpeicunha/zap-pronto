import { z } from 'zod';

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'string') {
      return { message: 'bad type!' };
    }
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: `Este campo deve ter pelo menos ${issue.minimum} caracteres` };
  }
  if (issue.code === z.ZodIssueCode.invalid_string) {
    console.log(issue);
    return { message: `Por favor verifique seu ${issue.path}` };
  }
  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` };
  }
  return { message: ctx.defaultError };
};
