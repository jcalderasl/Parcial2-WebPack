// // aggregator.js (Archivo de agregación de módulos)
// import * as Calculos from './Calculos.js';
// import * as ListaTareas from './ListaTareas.js';
// import * as ConversionUnidades from './ConversionUnidades.js';
// import * as GeneradorContraseñas from './GeneradorContraseñas.js';
// import * as Galeria from './Galeria.js';

// export default {
//   Calculos,
//   ListaTareas,
//   ConversionUnidades,
//   GeneradorContraseñas,
//   Galeria

// };
// module/aggregator.js
// import * as Calculos from './Calculos.js';

// export default Calculos;

// module/aggregator.js
// export * from './Calculos.js';
// export * from './ListaTareas.js';
// export * from './ConversionUnidades.js';
// export * from './GeneradorContraseñas.js';
// export * from './Galeria.js';

// module/aggregator.js
import * as Calculos from './Calculos.js';
import * as ConversionUnidades from './ConversionUnidades.js';
import * as Galeria from './Galeria.js'; // Asegúrate de importar Galeria.js
import * as ListaTareas from './ListaTareas.js';

export * from './Calculos.js';
export * from './ConversionUnidades.js';
export * from './Galeria.js';
export * from './ListaTareas.js';
export * from './GeneradorContraseñas.js';

