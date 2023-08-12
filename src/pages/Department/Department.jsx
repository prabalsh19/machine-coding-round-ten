import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

export const Department = () => {
  const departmentList = ["Kitchen", "Clothing", "Toys"];
  const { setSelectedDepartment } = useAppContext();
  return (
    <div className="department">
      {departmentList.map((department) => (
        <div key={department} className="card">
          <Link
            to="/products"
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </Link>
        </div>
      ))}
    </div>
  );
};
