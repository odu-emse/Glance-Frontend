import { Button } from 'emse-ui';
const ThreadPage = () => {
    return (
        <div>
            <Button label="< Back" className="mt-6 ml-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={() => history.back()} />
                <div className='flex justify-center items-center h-screen'>
                    <p>Communities Thread</p>
                </div>
        </div>

    )
}
  
export default ThreadPage;


