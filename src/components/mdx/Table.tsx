export function Table({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-x-auto my-8 border border-slate-200 rounded-lg">
            <table className="w-full text-left text-sm">
                {children}
            </table>
        </div>
    );
}

export function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <thead className="bg-slate-50 border-b border-slate-200">
            {children}
        </thead>
    );
}

export function TableBody({ children }: { children: React.ReactNode }) {
    return (
        <tbody className="divide-y divide-slate-100">
            {children}
        </tbody>
    );
}

export function TableRow({ children }: { children: React.ReactNode }) {
    return (
        <tr className="hover:bg-slate-50/50 transition-colors">
            {children}
        </tr>
    );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
    return (
        <th className="px-6 py-4 font-bold text-slate-900 font-oswald uppercase text-xs tracking-wider">
            {children}
        </th>
    );
}

export function TableCell({ children }: { children: React.ReactNode }) {
    return (
        <td className="px-6 py-4 text-slate-600">
            {children}
        </td>
    );
}
