export const sendSMSVerification = async (phoneNumber: string): Promise<boolean> => {
  try {
    const response = await fetch("/api/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    })

    if (!response.ok) {
      throw new Error("Failed to send SMS")
    }

    return true
  } catch (error) {
    console.error("SMS sending error:", error)
    throw error
  }
}

export const verifyOTP = async (phoneNumber: string, otp: string): Promise<boolean> => {
  try {
    // Replace with your actual OTP verification service
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, otp }),
    })

    if (!response.ok) {
      throw new Error("Failed to verify OTP")
    }

    const data = await response.json()
    return data.isValid
  } catch (error) {
    console.error("OTP verification error:", error)
    throw error
  }
}
