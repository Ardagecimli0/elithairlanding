import { useTranslation } from '../i18n';
import { MapPin, Mail, Phone } from 'lucide-react';
import ElithairLogo from '../assets/images/ElitHairLogo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-coral mb-8">
              {t('footer.contactTitle')}
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">{t('footer.address.label')}</span>
                </div>
                <p className="text-white/80 ml-7">{t('footer.address.value')}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">{t('footer.email.label')}</span>
                </div>
                <p className="text-white/80 ml-7">{t('footer.email.value')}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">{t('footer.phone.label')}</span>
                </div>
                <p className="text-white/80 ml-7">{t('footer.phone.value')}</p>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-10 flex items-center gap-2">
              <img
                src={ElithairLogo}
                alt="Elithair"
                className="h-24 md:h-28 object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[300px]">
            <iframe
              src="https://www.google.com/maps?ll=41.102726,28.982212&z=15&t=m&hl=tr&gl=TR&mapclient=embed&cid=17713484474774051393&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elithair Location"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-base">
            © {new Date().getFullYear()} Elithair. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
