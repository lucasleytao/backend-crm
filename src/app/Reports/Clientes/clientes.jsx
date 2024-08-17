import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function clientesPdf(clientes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Medium.ttf',
            italics: 'Roboto-Italic.ttf',
            bolditalics: 'Roboto-MediumItalic.ttf'
        }
    };
    // variaveis de customizacao

    const reportTitle = [
        {
            text: 'Lista de clientes',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // l t r b
        }
    ];

    const dados = clientes.map((cliente) => {
        return [
            // { text: cliente.id, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.nome, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.end, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.fone, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.email, fontSize: 9, margin: [0, 2, 0, 2] }
        ]
    })

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'], // ajuste automatico das colunas de acordo com o conteudo
                body: [
                    [
                        // { text: 'Código', style: 'tableHeader', fontSize: 10 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 10 },
                        { text: 'Endereço', style: 'tableHeader', fontSize: 10 },
                        { text: 'Telefone', style: 'tableHeader', fontSize: 10 },
                        { text: 'Email', style: 'tableHeader', fontSize: 10 }
                    ],
                    ...dados
                ]
            },
            layout: 'headerLineOnly' // sheaderLineOnly
        }
    ];

    function rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    // const rodape = [];

    // instancia de relatorios

    const docDefinitions = {
        defaultStyle: {
            font: 'Roboto'
        },
        pageSize: 'A4',
        pageMargins: [5, 50, 5, 5], // l t r b

        header: [reportTitle],
        content: [details],
        footer: rodape
    }

    try { // tente
        pdfMake.createPdf(docDefinitions).download();
    } catch (error) { // pegue
        console.error('Erro ao gerar PDF: ', error)
    }

}

export default clientesPdf;