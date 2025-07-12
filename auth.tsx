export const getUserRole = (): string | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token));
    return decoded.role;
  } catch {
    return null;
  }
};

export const requireRole = (allowedRoles: string[]) => {
  const role = getUserRole();
  return role && allowedRoles.includes(role);
};
