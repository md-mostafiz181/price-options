

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-5 hover:bg-green-600 p-3"> <a href={route.path}>{route.name}</a> </li>
        </div>
    );
};

export default Link;