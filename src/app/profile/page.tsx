'use client';

export default function ProfilePage() {
  const user = {
    name: 'Sadik Basha',
    email: 'sadik@example.com',
    phone: '+91 98765 43210',
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-medium">{user.phone}</p>
          </div>
        </div>

        <button className="mt-6 self-start bg-primary text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </main>
  );
}
