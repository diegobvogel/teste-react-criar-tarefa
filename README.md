ESTUDO REACT

Passos
	1- instalar o node (npm)
	2- instalar o Vite (rodar o comando abaixo dentro da pasta que vc quer criar o projeto) 
		-> npm create vite@5.5.2 .
		-> npm install
		-> npm run dev (para subir o projeto)
	3- instalar tailwindcss, postcss e autoprefixer
		-> npm install -D tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
	4- adicionar imports do tailwindcss no arquivo arquivo index.css
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	5- instalar biblioteca para usar icones
		-> npm install lucide-react@0.435.0
	6- instalar o react-router para navegar entre páginas
		-> npm install react-router-dom@6.26.1


STATE (ESTADO)
	Necessário utilizar para quando precisa atualizar a tela sem recarregar
		const [param1, funcao1] = useState("msg padrao");

VERSEL
	Plataforma para fazer o deploy da aplicação