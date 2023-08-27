import { Session } from "@/components/sections"
import { UnauthorizedLayout } from "@/components/layouts"
export default function Login() {
  return (
    <UnauthorizedLayout>
      <Session />
    </UnauthorizedLayout>
  )
}
