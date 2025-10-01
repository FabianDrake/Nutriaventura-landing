import './TermsAndPrivacy.css';

const TermsAndPrivacy = ({ navigateToHome }) => {
  return (
    <section id="terminos-privacidad" className="terms-privacy-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            
            {/* Botón para volver arriba */}
            <div className="text-center mb-4">
              <button 
                onClick={navigateToHome} 
                className="btn btn-outline-primary btn-lg"
              >
                <i className="bi bi-arrow-left me-2"></i>
                Volver al inicio
              </button>
            </div>
            
            {/* Términos y Condiciones */}
            <div className="card mb-5 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h2 className="card-title mb-0 h3 text-center">
                  <i className="bi bi-file-text me-2"></i>
                  Términos y Condiciones
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="terms-content">
                  
                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-check-circle me-2"></i>
                      1. Aceptación de los Términos
                    </h4>
                    <p className="text-justify">
                      Bienvenido a NutriAventura ("La Aplicación"). Estos Términos y Condiciones ("Términos") regulan el acceso y uso que usted ("El Usuario") hace de nuestros servicios. Al descargar, instalar o utilizar La Aplicación, usted declara haber leído, comprendido y aceptado quedar legalmente obligado por los presentes Términos. Si no está de acuerdo, deberá abstenerse de utilizar La Aplicación.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-book me-2"></i>
                      2. Objeto y Naturaleza del Servicio
                    </h4>
                    <p className="text-justify">
                      NutriAventura es una herramienta digital gamificada de carácter informativo y educativo, enfocada en promover hábitos alimenticios saludables en la población infantil.
                    </p>
                    <p className="text-justify">El contenido disponible en La Aplicación:</p>
                    <ul className="text-start">
                      <li>Tiene fines informativos y educativos únicamente.</li>
                      <li><strong>NO sustituye el diagnóstico, orientación ni tratamiento médico profesional.</strong></li>
                      <li>Las decisiones relacionadas con la alimentación o salud de un menor deben ser siempre supervisadas por un médico, pediatra o nutriólogo certificado.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-person-plus me-2"></i>
                      3. Registro y Cuenta de Usuario
                    </h4>
                    <p className="text-justify">Para acceder a todas las funcionalidades de La Aplicación, el Usuario deberá crear una cuenta personal. Al hacerlo, se compromete a:</p>
                    <ul className="text-start">
                      <li>Proporcionar información veraz, actualizada y completa.</li>
                      <li>Mantener la confidencialidad de su contraseña y ser responsable de las actividades realizadas en su cuenta.</li>
                      <li>Ser padre, madre o tutor legal del menor cuyos datos se registren, o contar con la autorización correspondiente.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-shield-check me-2"></i>
                      4. Uso Permitido y Restricciones
                    </h4>
                    <p className="text-justify">Se otorga al Usuario una licencia limitada, revocable, no exclusiva e intransferible para el uso personal y no comercial de La Aplicación.</p>
                    <p className="text-justify">El Usuario no podrá:</p>
                    <ul className="text-start">
                      <li>Utilizar La Aplicación con fines ilícitos, fraudulentos o no autorizados.</li>
                      <li>Copiar, modificar, distribuir, vender o arrendar cualquier parte de La Aplicación.</li>
                      <li>Realizar ingeniería inversa, descompilar o intentar obtener el código fuente.</li>
                      <li>Usar la información contenida en La Aplicación con fines comerciales o competitivos.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-copyright me-2"></i>
                      5. Propiedad Intelectual
                    </h4>
                    <p className="text-justify">
                      Todo el contenido de La Aplicación (textos, imágenes, gráficos, logotipos, interfaces, código fuente, bases de datos y diseño) es propiedad exclusiva de NutriAventura o de sus licenciantes, y está protegido por las leyes nacionales e internacionales de derechos de autor y propiedad intelectual.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-exclamation-triangle me-2"></i>
                      6. Exclusión de Garantías y Limitación de Responsabilidad
                    </h4>
                    <p className="text-justify">La Aplicación se proporciona "tal cual" y "según disponibilidad".</p>
                    <p className="text-justify">En la máxima medida permitida por la ley:</p>
                    <ul className="text-start">
                      <li>NutriAventura no garantiza que el servicio sea libre de errores, seguro o ininterrumpido.</li>
                      <li>No será responsable de decisiones médicas, de salud o nutricionales basadas en el contenido de La Aplicación.</li>
                      <li>No responderá por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de La Aplicación.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-gear me-2"></i>
                      7. Modificaciones al Servicio y a los Términos
                    </h4>
                    <p className="text-justify">
                      NutriAventura podrá actualizar, modificar o suspender el servicio en cualquier momento sin previo aviso. Asimismo, estos Términos podrán modificarse de forma periódica.
                    </p>
                    <p className="text-justify">
                      Cualquier cambio será notificado a los Usuarios a través de La Aplicación o por correo electrónico, en caso de ser relevante. El uso continuado de La Aplicación constituye la aceptación de los nuevos Términos.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-globe me-2"></i>
                      8. Ley Aplicable y Jurisdicción
                    </h4>
                    <p className="text-justify">
                      Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para la resolución de controversias, las partes se someten a la jurisdicción de los tribunales competentes en la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponder.
                    </p>
                  </div>

                  <div className="mb-0">
                    <h4 className="text-primary mb-3">
                      <i className="bi bi-envelope me-2"></i>
                      9. Contacto
                    </h4>
                    <p className="text-justify">
                      Si tiene dudas, comentarios o solicitudes relacionadas con estos Términos, puede contactarnos a través del correo electrónico oficial:
                    </p>
                    <p className="text-center">
                      <strong>📩 nutriaventura.app@gmail.com</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso de Privacidad */}
            <div className="card mb-5 shadow-sm">
              <div className="card-header bg-success text-white">
                <h2 className="card-title mb-0 h3 text-center">
                  <i className="bi bi-shield-check me-2"></i>
                  Aviso de Privacidad
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="privacy-content">
                  
                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-building me-2"></i>
                      1. Identidad y Domicilio del Responsable
                    </h4>
                    <p className="text-justify">
                      NutriAventura ("La Aplicación"), desarrollada por [Nombre del Desarrollador o Empresa] ("El Responsable"), con domicilio en [Dirección Completa], es responsable del tratamiento y protección de los datos personales recabados, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-database me-2"></i>
                      2. Datos Personales Recabados
                    </h4>
                    <p className="text-justify">Para brindarle nuestros servicios, podremos solicitar y tratar las siguientes categorías de datos personales:</p>
                    <ul className="text-start">
                      <li><strong>Datos de identificación del tutor:</strong> nombre, correo electrónico.</li>
                      <li><strong>Datos del menor (sensibles):</strong> nombre o alias, edad o fecha de nacimiento, género, peso, estatura, alergias, intolerancias, preferencias y restricciones alimenticias.</li>
                    </ul>
                    <p className="text-justify"><strong>En ningún caso solicitaremos datos financieros, bancarios o patrimoniales.</strong></p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-target me-2"></i>
                      3. Finalidades del Tratamiento de Datos
                    </h4>
                    <p className="text-justify">Los datos personales serán utilizados para las siguientes finalidades primarias:</p>
                    <ul className="text-start">
                      <li>Crear y administrar la cuenta de usuario.</li>
                      <li>Personalizar planes alimenticios y contenido educativo dentro de La Aplicación.</li>
                      <li>Realizar análisis estadísticos anónimos para mejorar funcionalidades y la experiencia del usuario.</li>
                      <li>Brindar soporte técnico y responder a consultas de los usuarios.</li>
                    </ul>
                    <p className="text-justify"><strong>Finalidades secundarias (opcionales):</strong> no utilizaremos sus datos con fines de mercadotecnia, publicidad o prospección comercial sin su consentimiento expreso.</p>
                    <p className="text-justify"><strong>NutriAventura no vende, transfiere ni comparte datos personales con terceros sin autorización.</strong></p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-shield-lock me-2"></i>
                      4. Medidas de Seguridad
                    </h4>
                    <p className="text-justify">
                      Hemos implementado medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra pérdida, alteración, destrucción, acceso o uso no autorizado. La información se almacena en servidores seguros con acceso restringido.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-person-check me-2"></i>
                      5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                    </h4>
                    <p className="text-justify">Usted tiene derecho a:</p>
                    <ul className="text-start">
                      <li><strong>Acceso:</strong> conocer qué datos tenemos y cómo los usamos.</li>
                      <li><strong>Rectificación:</strong> solicitar la corrección de su información personal.</li>
                      <li><strong>Cancelación:</strong> pedir la eliminación de sus datos cuando considere que no se usan adecuadamente.</li>
                      <li><strong>Oposición:</strong> negarse al uso de sus datos para finalidades específicas.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-envelope me-2"></i>
                      6. Procedimiento para Ejercer Derechos ARCO
                    </h4>
                    <p className="text-justify">Para ejercer cualquiera de los derechos ARCO, deberá enviar una solicitud al correo electrónico:</p>
                    <p className="text-center">
                      <strong>📩 nutriaventura.app@gmail.com</strong>
                    </p>
                    <p className="text-justify">Su solicitud deberá incluir:</p>
                    <ul className="text-start">
                      <li>Nombre completo del titular (padre, madre o tutor).</li>
                      <li>Documento que acredite su identidad o representación legal.</li>
                      <li>Descripción clara de los datos respecto de los que busca ejercer algún derecho.</li>
                    </ul>
                    <p className="text-justify">Daremos respuesta en un plazo máximo de <strong>20 días hábiles</strong> conforme a la LFPDPPP.</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-people me-2"></i>
                      7. Tratamiento de Datos de Menores de Edad
                    </h4>
                    <p className="text-justify">
                      NutriAventura está diseñada para ser utilizada bajo la supervisión de padres, madres o tutores legales. Los datos de menores solo son tratados con el consentimiento expreso de sus responsables.
                    </p>
                    <p className="text-justify">
                      Los padres o tutores podrán ejercer en cualquier momento los derechos ARCO en representación del menor.
                    </p>
                  </div>

                  <div className="mb-0">
                    <h4 className="text-success mb-3">
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      8. Cambios al Aviso de Privacidad
                    </h4>
                    <p className="text-justify">
                      Este Aviso de Privacidad podrá ser actualizado por modificaciones legales o internas de NutriAventura. Cualquier cambio será notificado a través de La Aplicación o mediante correo electrónico registrado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fecha de actualización */}
            <div className="text-center">
              <div className="alert alert-info d-inline-block">
                <i className="bi bi-calendar-event me-2"></i>
                <strong>Última actualización:</strong> 30 de septiembre de 2025
              </div>
            </div>

            {/* Botón para volver */}
            <div className="text-center mt-4">
              <button 
                onClick={navigateToHome} 
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-house me-2"></i>
                Volver al inicio
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndPrivacy;