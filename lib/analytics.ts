export type AnalyticsEvent =
  | 'booking_open'
  | 'booking_submit'
  | 'phone_click'
  | 'whatsapp_click'
  | 'telegram_click'
  | 'room_view'
  | 'gallery_open'
  | 'route_click';

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') {
    return;
  }

  const win = window as Window & {
    ym?: (counterId: string, method: string, eventName: string, params?: unknown) => void;
    gtag?: (command: string, eventName: string, params?: unknown) => void;
  };

  win.gtag?.('event', event, params);
}
