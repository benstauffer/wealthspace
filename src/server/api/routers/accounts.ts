import { AccountType } from "@prisma/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
  getAll: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return await ctx.db.account.findMany({ where: { userId: input } });
  }),
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        type: z.any(),
        value: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.account.create({
        data: {
          name: input.name,
          type: input.type,
          value: input.value,
          userId: input.userId,
        },
      });
    }),
  remove: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.db.account.delete({ where: { id: input.id } });
    }),
  edit: publicProcedure
    .input(z.object({ id: z.number(), name: z.string(), value: z.number() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.db.account.update({
        where: { id: input.id },
        data: {
          name: input.name,
          value: input.value,
        },
      });
    }),
});
