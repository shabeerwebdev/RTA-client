import { createTheme } from "flowbite-react";

export const COLORS = {
  primary: "rgba(230, 65, 66, 1)",
  secondary: "#e119e1ff",
  tertiary: "#f9f5f5",
  accent: "#fce8e8",
  white: "#ffffff",
};

export const customTheme = createTheme({
  button: {
    base: "relative flex items-center justify-center rounded-lg text-center font-medium focus:ring-4 focus:outline-none",
    disabled: "pointer-events-none opacity-50",
    fullSized: "w-full",
    grouped:
      "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
    pill: "rounded-full",
    size: {
      xs: "h-8 px-3 text-xs",
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-5 text-base",
      xl: "h-[52px] px-6 text-base",
    },
    color: {
      default:
        "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 text-white",
      alternative:
        "hover:text-primary-700 border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100",
      blue: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300",
      cyan: "bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300",
      dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300",
      gray: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300",
      green: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-300",
      indigo:
        "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-300",
      light:
        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100",
      lime: "bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-300",
      pink: "bg-pink-700 text-white hover:bg-pink-800 focus:ring-pink-300",
      purple:
        "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300",
      red: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-300",
      teal: "bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-300",
      yellow:
        "bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300",
    },
    outlineColor: {
      default:
        "border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 focus:ring-primary-300 border hover:text-white",
      blue: "border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300",
      cyan: "border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300",
      dark: "border border-gray-800 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300",
      gray: "border border-gray-700 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300",
      green:
        "border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300",
      indigo:
        "border border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:ring-indigo-300",
      lime: "border border-lime-700 text-lime-700 hover:border-lime-800 hover:bg-lime-800 hover:text-white focus:ring-lime-300",
      pink: "border border-pink-700 text-pink-700 hover:border-pink-800 hover:bg-pink-800 hover:text-white focus:ring-pink-300",
      purple:
        "border border-purple-700 text-purple-700 hover:border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-purple-300",
      red: "border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300",
      teal: "border border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-300",
      yellow:
        "border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300",
    },
  },
  sidebar: {
    root: {
      base: "h-full",
      collapsed: {
        on: "w-16",
        off: "w-64",
      },
      inner:
        "h-full overflow-x-hidden overflow-y-auto rounded bg-gray-50 px-3 py-4",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100",
      icon: {
        base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900",
        open: {
          off: "",
          on: "text-gray-900",
        },
      },
      label: {
        base: "ml-3 flex-1 text-left whitespace-nowrap",
        title: "sr-only",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out",
          open: {
            on: "rotate-180",
            off: "",
          },
        },
      },
      list: "space-y-2 py-2",
    },
    cta: {
      base: "mt-6 rounded-lg bg-gray-100 p-4",
      color: {
        blue: "bg-cyan-50",
        dark: "bg-dark-50",
        failure: "bg-red-50",
        gray: "bg-gray-50",
        green: "bg-green-50",
        light: "bg-light-50",
        red: "bg-red-50",
        purple: "bg-purple-50",
        success: "bg-green-50",
        yellow: "bg-yellow-50",
        warning: "bg-yellow-50",
      },
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100",
      active: "bg-gray-100",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold",
      },
      content: {
        base: "flex-1 px-3 whitespace-nowrap",
      },
      icon: {
        base: "h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900",
        active: "text-gray-700",
      },
      label: "",
      listItem: "",
    },
    items: {
      base: "",
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0",
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center text-xl font-semibold whitespace-nowrap",
      },
      img: "mr-3 h-6 sm:h-7",
    },
  },
  checkbox: {
    base: "checked:bg-check-icon h-4 w-4 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current focus:ring-2 focus:ring-offset-2 focus:outline-none",
    color: {
      default: "text-primary-600 focus:ring-primary-600",
      dark: "text-gray-800 focus:ring-gray-800",
      failure: "text-red-900 focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800",
      light: "text-gray-900 focus:ring-gray-900",
      purple: "text-purple-600 focus:ring-purple-600",
      success: "text-green-800 focus:ring-green-800",
      warning: "text-yellow-400 focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600",
      cyan: "text-cyan-600 focus:ring-cyan-600",
      green: "text-green-600 focus:ring-green-600",
      indigo: "text-indigo-700 focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600",
      yellow: "text-yellow-400 focus:ring-yellow-400",
    },
    indeterminate: "bg-dash-icon border-transparent bg-current",
  },
  navbar: {
    root: {
      base: "rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
      },
    },
    brand: {
      base: "flex items-center",
      img: "mr-3 h-6 sm:h-9",
      span: "self-center text-xl font-semibold whitespace-nowrap",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    },
    link: {
      base: "block rounded py-2 pr-4 pl-3 text-gray-700 md:bg-transparent md:p-0 md:text-gray-700",
      active: {
        on: "bg-blue-700 text-white md:bg-transparent md:text-blue-700",
        off: "",
      },
      disabled: {
        on: "cursor-not-allowed text-gray-400",
        off: "",
      },
    },
    toggle: {
      base: "ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden",
      icon: "h-6 w-6",
    },
  },
  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500",
      shadow:
        "absolute top-0 left-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-last/body:group-last/row:first:rounded-bl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs text-gray-700 uppercase",
      cell: {
        base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50",
      striped: "odd:bg-white even:bg-gray-50",
    },
  },
});
