export const WHATSAPP_NUMBER = "523324574969";
export const BUSINESS_NAME = "Dental Lakeside";

export interface AppointmentData { name: string; service: string; date: string; time: string; message: string; }

function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("es-MX", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function buildAppointmentUrl(data: AppointmentData): string {
  const text = `¡Hola ${BUSINESS_NAME}! 👋\nMe llamo ${data.name} y quiero agendar una cita.\n• Servicio: ${data.service}\n• Fecha: ${formatDate(data.date)}\n• Horario: ${data.time}\n• Comentarios: ${data.message.trim() || "Sin comentarios"}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildInfoUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`¡Hola ${BUSINESS_NAME}! Me gustaría recibir más información sobre sus servicios.`)}`;
}

export function buildManageUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`¡Hola ${BUSINESS_NAME}! Necesito reagendar o cancelar una cita existente. ¿Me pueden ayudar?`)}`;
}
