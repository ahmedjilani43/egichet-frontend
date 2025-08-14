import VerifyPhoneCode from "@/components/auth/2stepVerification"

interface SmsVerificationProps {
  onBack: () => void
}

export default function SmsVerification({ onBack }: SmsVerificationProps) {
  return (
    <div>
      <VerifyPhoneCode />
    </div>
  )
}
