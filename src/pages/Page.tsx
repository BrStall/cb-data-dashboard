import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { prisma } from "../../lib/prisma"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Page({usuario} : Props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'nome',
          headerName: 'Nome',
          width: 350,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'E-mail',
          width: 400,
          editable: true,
        },
        {
          field: 'senha',
          headerName: 'Senha',
          width: 400,
          editable: true,
        },
      ];

      const rows = usuario

    return(
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: {
                    pageSize: 5,
                },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            />
      </Box>
    )

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const usuario = await prisma.usuario.findMany({})
    console.log(usuario)

    return {
        props: {
            usuario
        }
    }
}