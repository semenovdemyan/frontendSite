import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Отключаем Turbopack (решает проблемы с исчезающими стилями)
  experimental: {
    turbo: undefined,
  },

  // Опционально: кастомная конфигурация CSS-модулей
  webpack(config, { isServer }) {
    // Добавляем правило для SCSS-модулей
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        isServer ? "null-loader" : "style-loader", // На сервере стили не нужны
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]", // Формат имен классов
              exportOnlyLocals: isServer, // Для SSR
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};

export default nextConfig;