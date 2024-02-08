export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const getAge = (birthDate: any) =>{
  const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    // Calculate the difference in years
    const ageDiff = currentDate.getFullYear() - birthDateObj.getFullYear();

    // Check if the birthday has occurred this year
    const hasBirthdayOccurred =
      currentDate.getMonth() > birthDateObj.getMonth() ||
      (currentDate.getMonth() === birthDateObj.getMonth() &&
        currentDate.getDate() >= birthDateObj.getDate());

    // Adjust the age if the birthday hasn't occurred yet this year
    const finalAge = hasBirthdayOccurred ? ageDiff : ageDiff - 1;
    return finalAge
}