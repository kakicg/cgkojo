import { router } from "@/trpc/server/trpc"
import { authRouter } from "@/trpc/server/routers/auth"

// ルーターの作成
export const appRouter = router({
  auth: authRouter,
})

// ルーターの型定義
export type AppRouter = typeof appRouter