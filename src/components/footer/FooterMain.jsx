import { Footer } from 'flowbite-react';

export const FooterMain = () => {
  return (
    <Footer container className='bg-neutral-800 rounded-none'>
      <Footer.Copyright className='text-white'
        by="Team K™"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link className='text-white' href="#">
          Nosotros
        </Footer.Link>
        <Footer.Link className='text-white' href="#">
          Politica de privacidad
        </Footer.Link>
        <Footer.Link className='text-white' href="#">
          Licencia
        </Footer.Link>
        <Footer.Link className='text-white' href="#">
          Contacto
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
