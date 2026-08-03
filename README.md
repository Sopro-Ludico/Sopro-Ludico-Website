# Sopro Lúdico — site

Landing page estática e responsiva para o estúdio, pronta para GitHub Pages.

## Personalização

- Edite o nome, os textos e todos os `href="#"` em `index.html`.
- Troque `assets/logo.svg` pela logo quadrada.
- Troque `assets/logotipo.svg` pelo logotipo retangular (proporção sugerida: `3.509 / 2.482`).
- Troque `assets/game-cover.svg` ou `assets/game-cover.png` pela arte do jogo.

As imagens podem ser SVG, PNG ou WebP; se o nome ou extensão mudar, atualize o caminho em `index.html`.

## Publicação no GitHub Pages

1. Envie os arquivos para a branch `main` do repositório.
2. Em **Settings → Pages**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Para usar um domínio próprio, informe-o em **Custom domain**. O GitHub criará um arquivo `CNAME` automaticamente.

## SEO e domínio

A página já inclui metadados para buscadores, Open Graph, Twitter Cards, dados estruturados e `robots.txt`.

Quando o domínio definitivo estiver configurado, substitua os caminhos relativos `/` nos campos `canonical`, `og:url` e nos dados estruturados de `index.html` pela URL absoluta do site. Crie também um `sitemap.xml` com essa mesma URL e adicione `Sitemap: https://seu-dominio.com/sitemap.xml` ao final de `robots.txt`.
