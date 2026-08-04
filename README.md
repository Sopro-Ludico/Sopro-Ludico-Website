# Sopro Lúdico — site

Landing page estática e responsiva para o estúdio, pronta para GitHub Pages.

## Personalização

- Edite o nome, os textos e todos os `href="#"` em `index.html`.
- Troque `assets/logo.svg` pela logo quadrada.
- Troque `assets/logotipo.svg` pelo logotipo retangular (proporção sugerida: `3.509 / 2.482`).
- Troque `assets/game-cover.svg` ou `assets/game-cover.png` pela arte do jogo.

As imagens podem ser SVG, PNG ou WebP; se o nome ou extensão mudar, atualize o caminho em `index.html`.

### Imagem de capa do jogo

Para a imagem `game-cover`, recomenda-se:

- Dimensões de `1200 × 1800 px`.
- Proporção vertical de `2:3`.
- Formato WebP para reduzir o tempo de carregamento.
- Arquivo com até `300–500 KB`, quando possível.

A capa usa `object-fit: cover`, portanto suas bordas podem ser recortadas conforme o tamanho da tela. Mantenha personagens, logotipos e textos importantes próximos ao centro da imagem.

#### Capa animada em vídeo

Para uma capa animada, prefira vídeo em vez de GIF. Recomenda-se:

- Proporção vertical de `2:3`.
- Dimensões de `800 × 1200 px` ou `1200 × 1800 px`.
- Formato WebM, com MP4/H.264 como alternativa para compatibilidade.
- Duração entre 4 e 10 segundos.
- Taxa de 24 ou 30 FPS.
- Bitrate aproximado entre 1,5 e 3 Mbps.
- Arquivo com até `2–4 MB`, quando possível.
- Reprodução automática, contínua, sem áudio e com o atributo `muted`.

Ao usar vídeo, substitua o elemento `<img>` por `<video>` e mantenha a imagem estática como `poster` e fallback.

#### Capa animada em GIF

Caso seja necessário usar GIF, recomenda-se:

- Proporção vertical de `2:3`.
- Dimensões máximas de `600 × 900 px`.
- Duração entre 4 e 6 segundos.
- Taxa de 12 a 15 FPS.
- Arquivo com até 3 MB.
- Poucas cores e movimentos simples para reduzir o tamanho.

GIFs grandes consomem mais banda e oferecem qualidade inferior à de um vídeo equivalente. Para esta página, a opção recomendada é um WebM de `800 × 1200 px`, acompanhado de MP4 como fallback.

## Publicação no GitHub Pages

1. Envie os arquivos para a branch `main` do repositório.
2. Em **Settings → Pages**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Para usar um domínio próprio, informe-o em **Custom domain**. O GitHub criará um arquivo `CNAME` automaticamente.

## SEO e domínio

A página já inclui metadados para buscadores, Open Graph, Twitter Cards, dados estruturados e `robots.txt`.

Quando o domínio definitivo estiver configurado, substitua os caminhos relativos `/` nos campos `canonical`, `og:url` e nos dados estruturados de `index.html` pela URL absoluta do site. Crie também um `sitemap.xml` com essa mesma URL e adicione `Sitemap: https://seu-dominio.com/sitemap.xml` ao final de `robots.txt`.
