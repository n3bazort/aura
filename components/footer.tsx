import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground md:ml-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl">Aura</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Acompañamos a familias con ciencia, amor e inclusión en el camino del autismo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quienes-somos"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/profesionales"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Profesionales
                </Link>
              </li>
              <li>
                <Link
                  href="/talleres"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Talleres
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/comunidad"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politicas"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Políticas de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contacto@aura.com" className="hover:text-primary transition-colors">
                  contacto@aura.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+593991234567" className="hover:text-primary transition-colors">
                  +593 99 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Guayaquil, Ecuador</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Aura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
