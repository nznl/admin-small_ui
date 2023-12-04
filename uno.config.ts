import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  presets:[
    presetUno()
  ],

  shortcuts: {
    "wh-full": "w-full h-full"
  },
    
  theme: {
    colors: {
      primary: 'rgb(var(el--primary-color))',
      primary_hover: 'rgb(var(el--primary-color-hover))',
      primary_pressed: 'rgb(var(el--primary-color-pressed))',
      primary_active: 'rgba(var(el--primary-color-active),0.1)',
      primary_1: 'rgb(var(el--primary-color1))',
      primary_2: 'rgb(var(el--primary-color2))',
      primary_3: 'rgb(var(el--primary-color3))',
      primary_4: 'rgb(var(el--primary-color4))',
      primary_5: 'rgb(var(el--primary-color5))',
      primary_6: 'rgb(var(el--primary-color6))',
      primary_7: 'rgb(var(el--primary-color7))',
      primary_8: 'rgb(var(el--primary-color8))',
      primary_9: 'rgb(var(el--primary-color9))',
      info: 'rgb(var(el--info-color))',
      info_hover: 'rgb(var(el--info-color-hover))',
      info_pressed: 'rgb(var(el--info-color-pressed))',
      info_active: 'rgb(var(el--info-color-active),0.1)',
      success: 'rgb(var(el--success-color))',
      success_hover: 'rgb(var(el--success-color-hover))',
      success_pressed: 'rgb(var(el--success-color-pressed))',
      success_active: 'rgb(var(el--success-color-active),0.1)',
      warning: 'rgb(var(el--warning-color))',
      warning_hover: 'rgb(var(el--warning-color-hover))',
      warning_pressed: 'rgb(var(el--warning-color-pressed))',
      warning_active: 'rgb(var(el--warning-color-active),0.1)',
      error: 'rgb(var(el--error-color))',
      error_hover: 'rgb(var(el--error-color-hover))',
      error_pressed: 'rgb(var(el--error-color-pressed))',
      error_active: 'rgb(var(el--error-color-active),0.1)',
      dark: '#18181c'
    }
  },
  
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
}) 