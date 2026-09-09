# Publicar no GitHub Pages

O projeto agora inclui o workflow `.github/workflows/deploy-pages.yml`. Para publicar pelo GitHub Pages, envie o projeto completo para o repositório e faça push para `main` ou `master`.

No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como fonte. Depois, abra a aba **Actions** e confirme a execução de **Deploy to GitHub Pages**. O workflow compila o Vite, usa automaticamente o nome do repositório como caminho base e cria `404.html` para evitar erros ao abrir rotas diretamente.

A URL esperada para um repositório chamado `rede-eletrica-consciente` será:

`https://SEU-USUARIO.github.io/rede-eletrica-consciente/`

Se o repositório tiver outro nome, não é necessário editar o código: o workflow utiliza `${{ github.event.repository.name }}` automaticamente. Se o erro 404 continuar, verifique se o workflow terminou com sucesso e se a fonte da página está definida como **GitHub Actions**, não como a raiz de uma branch.

> Observação: o site usa alguns assets hospedados no storage do Manus. Se as imagens não carregarem fora do Manus, elas precisarão ser hospedadas em um CDN público ou incluídas no artefato do GitHub Pages.
