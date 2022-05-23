// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { LangKeys } from "./LangKeys";

const LangPackES: { [key in LangKeys]: string } = {
  [LangKeys.AppTitle]: "Bienvenido",
  [LangKeys.AppHeading2]: "Intercambio descentralizado basado en Monero",
  [LangKeys.ConnectingToNetwork]: "Conexión a la red Monero",
  [LangKeys.Header]: "Haveno",
  [LangKeys.WelcomeToHaveno]:
    "Bienvenido a Haveno. El primer intercambio descentralizado basado en Monero del mundo.",
  [LangKeys.Save]: "Guardar",
  [LangKeys.AccountTitle]: "Cuenta",
  [LangKeys.AccountSidebarPaymentAccounts]: "Cuentas de pago",
  [LangKeys.AccountSidebarSecurity]: "Seguridad",
  [LangKeys.AccountSidebarWallet]: "Cartera",
  [LangKeys.AccountSidebarBackup]: "Respaldo",
  [LangKeys.AccountSidebarNodeSettings]: "Ajustes",
  [LangKeys.AccountSecurityTitle]: "Seguridad de la cuenta",
  [LangKeys.AccountSecurityDesc]:
    "Haveno no almacena ninguno de sus datos, esto ocurre únicamente localmente en su dispositivo. No es posible restaurar su contraseña cuando se pierde. Asegúrese de guardar una copia en un lugar seguro.",
  [LangKeys.AccountNodeSettingsDesc]:
    "Se recomienda usar un nodo local, pero requiere cargar toda la cadena de bloques. Elija 'nodo remoto' si prefiere una experiencia más rápida pero menos segura.",
  [LangKeys.AccountNodeSettingsTitle]: "La configuración de tu nodo",
  [LangKeys.AccountNodeSettingsLocal]: "Nodo Local",
  [LangKeys.AccountNodeSettingsRemote]: "Nodo Remoto",
  [LangKeys.AccountNodeFieldBlockchainLocation]:
    "Ubicación de cadena de bloques",
  [LangKeys.AccountNodeFieldBootstrapUrl]: "Dirección URL de arranque",
  [LangKeys.AccountNodeFieldPort]: "Puerto",
  [LangKeys.AccountNodeFieldDaemonFlags]: "Indicadores de inicio de daemon",
  [LangKeys.AccountNodeStopDaemon]: "Detener demonio",
  [LangKeys.AccountNodeStartDaemon]: "Comienzo demonio",
  [LangKeys.AccountNodeLocalSaveNotification]:
    "La configuración del nodo local se actualizó correctamente.",
  [LangKeys.AccountNodeDaemonStoppedNotif]: "Daemon se detuvo con éxito",
  [LangKeys.AccountNodeDaemonStartedNotif]: "Daemon se inició con éxito",
  [LangKeys.AccountSettingsAddNode]: "Agregar un nuevo nodo",
  [LangKeys.AccountSettingsCurrent]: "Actual",
  [LangKeys.AccountSecurityFieldPassword]: "Clave",
  [LangKeys.AccountSecurityFieldRepeatPassword]: "Repita la nueva contraseña",
  [LangKeys.AccountSecurityFieldCurrentPassword]: "Contraseña actual",
  [LangKeys.AccountSecurityFieldPasswordFormatMsg]:
    "contener al menos {minChars} caracteres, una mayúscula, una minúscula y un número.",
  [LangKeys.AccountSecurityFieldRepeatPasswordMatchMsg]:
    "La confirmación de la contraseña no coincide con la contraseña.",
  [LangKeys.CreatePassword]: "Crear contraseña",
};

export default LangPackES;
